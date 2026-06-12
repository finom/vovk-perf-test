import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzb")
export default class DzbController {
  @operation({
    summary: "Get Dzb",
  })
  @get()
  static getDzb = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzb",
  })
  @post("{id}")
  static createDzb = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
