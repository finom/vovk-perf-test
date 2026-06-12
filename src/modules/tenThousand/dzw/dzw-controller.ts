import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzw")
export default class DzwController {
  @operation({
    summary: "Get Dzw",
  })
  @get()
  static getDzw = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzw",
  })
  @post("{id}")
  static createDzw = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
