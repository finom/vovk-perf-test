import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("moi")
export default class MoiController {
  @operation({
    summary: "Get Moi",
  })
  @get()
  static getMoi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Moi",
  })
  @post("{id}")
  static createMoi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
