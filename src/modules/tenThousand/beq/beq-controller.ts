import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("beq")
export default class BeqController {
  @operation({
    summary: "Get Beq",
  })
  @get()
  static getBeq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Beq",
  })
  @post("{id}")
  static createBeq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
