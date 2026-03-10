import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kzk")
export default class KzkController {
  @operation({
    summary: "Get Kzk",
  })
  @get()
  static getKzk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kzk",
  })
  @post("{id}")
  static createKzk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
