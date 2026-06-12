import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("blb")
export default class BlbController {
  @operation({
    summary: "Get Blb",
  })
  @get()
  static getBlb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Blb",
  })
  @post("{id}")
  static createBlb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
