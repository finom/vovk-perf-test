import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mtk")
export default class MtkController {
  @operation({
    summary: "Get Mtk",
  })
  @get()
  static getMtk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mtk",
  })
  @post("{id}")
  static createMtk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
