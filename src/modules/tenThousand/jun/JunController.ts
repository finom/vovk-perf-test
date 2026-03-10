import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jun")
export default class JunController {
  @operation({
    summary: "Get Jun",
  })
  @get()
  static getJun = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jun",
  })
  @post("{id}")
  static createJun = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
