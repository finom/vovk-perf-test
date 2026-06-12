import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("vo")
export default class VoController {
  @operation({
    summary: "Get Vo",
  })
  @get()
  static getVo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Vo",
  })
  @post("{id}")
  static createVo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
