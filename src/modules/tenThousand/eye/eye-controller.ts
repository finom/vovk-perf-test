import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("eye")
export default class EyeController {
  @operation({
    summary: "Get Eye",
  })
  @get()
  static getEye = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Eye",
  })
  @post("{id}")
  static createEye = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
