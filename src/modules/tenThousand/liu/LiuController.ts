import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("liu")
export default class LiuController {
  @operation({
    summary: "Get Liu",
  })
  @get()
  static getLiu = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Liu",
  })
  @post("{id}")
  static createLiu = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
