import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("fcg")
export default class FcgController {
  @operation({
    summary: "Get Fcg",
  })
  @get()
  static getFcg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Fcg",
  })
  @post("{id}")
  static createFcg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
