import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dzz")
export default class DzzController {
  @operation({
    summary: "Get Dzz",
  })
  @get()
  static getDzz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dzz",
  })
  @post("{id}")
  static createDzz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
