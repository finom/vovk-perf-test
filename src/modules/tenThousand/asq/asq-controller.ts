import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asq")
export default class AsqController {
  @operation({
    summary: "Get Asq",
  })
  @get()
  static getAsq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Asq",
  })
  @post("{id}")
  static createAsq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
