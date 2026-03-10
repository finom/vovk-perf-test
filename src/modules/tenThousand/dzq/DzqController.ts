import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzq")
export default class DzqController {
  @operation({
    summary: "Get Dzq",
  })
  @get()
  static getDzq = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzq",
  })
  @post("{id}")
  static createDzq = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
