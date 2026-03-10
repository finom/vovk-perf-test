import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("iph")
export default class IphController {
  @operation({
    summary: "Get Iph",
  })
  @get()
  static getIph = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Iph",
  })
  @post("{id}")
  static createIph = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
