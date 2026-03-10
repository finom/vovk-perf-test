import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ko")
export default class KoController {
  @operation({
    summary: "Get Ko",
  })
  @get()
  static getKo = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ko",
  })
  @post("{id}")
  static createKo = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
