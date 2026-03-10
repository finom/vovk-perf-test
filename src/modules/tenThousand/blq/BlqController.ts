import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blq")
export default class BlqController {
  @operation({
    summary: "Get Blq",
  })
  @get()
  static getBlq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blq",
  })
  @post("{id}")
  static createBlq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
