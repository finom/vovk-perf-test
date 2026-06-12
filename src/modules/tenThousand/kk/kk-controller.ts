import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kk")
export default class KkController {
  @operation({
    summary: "Get Kk",
  })
  @get()
  static getKk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kk",
  })
  @post("{id}")
  static createKk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
