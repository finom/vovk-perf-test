import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("krk")
export default class KrkController {
  @operation({
    summary: "Get Krk",
  })
  @get()
  static getKrk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Krk",
  })
  @post("{id}")
  static createKrk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
