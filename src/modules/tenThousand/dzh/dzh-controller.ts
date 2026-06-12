import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzh")
export default class DzhController {
  @operation({
    summary: "Get Dzh",
  })
  @get()
  static getDzh = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzh",
  })
  @post("{id}")
  static createDzh = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
