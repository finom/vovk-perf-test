import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blr")
export default class BlrController {
  @operation({
    summary: "Get Blr",
  })
  @get()
  static getBlr = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blr",
  })
  @post("{id}")
  static createBlr = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
