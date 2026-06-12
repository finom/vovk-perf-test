import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzl")
export default class DzlController {
  @operation({
    summary: "Get Dzl",
  })
  @get()
  static getDzl = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzl",
  })
  @post("{id}")
  static createDzl = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
