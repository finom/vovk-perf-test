import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hur")
export default class HurController {
  @operation({
    summary: "Get Hur",
  })
  @get()
  static getHur = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hur",
  })
  @post("{id}")
  static createHur = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
