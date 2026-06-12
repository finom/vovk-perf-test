import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzp")
export default class DzpController {
  @operation({
    summary: "Get Dzp",
  })
  @get()
  static getDzp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzp",
  })
  @post("{id}")
  static createDzp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
