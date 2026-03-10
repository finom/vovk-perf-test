import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kub")
export default class KubController {
  @operation({
    summary: "Get Kub",
  })
  @get()
  static getKub = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kub",
  })
  @post("{id}")
  static createKub = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
