import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("jul")
export default class JulController {
  @operation({
    summary: "Get Jul",
  })
  @get()
  static getJul = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Jul",
  })
  @post("{id}")
  static createJul = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
