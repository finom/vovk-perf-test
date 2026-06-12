import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("chc")
export default class ChcController {
  @operation({
    summary: "Get Chc",
  })
  @get()
  static getChc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Chc",
  })
  @post("{id}")
  static createChc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
