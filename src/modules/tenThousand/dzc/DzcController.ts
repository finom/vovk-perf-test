import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzc")
export default class DzcController {
  @operation({
    summary: "Get Dzc",
  })
  @get()
  static getDzc = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzc",
  })
  @post("{id}")
  static createDzc = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
