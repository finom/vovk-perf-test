import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kxk")
export default class KxkController {
  @operation({
    summary: "Get Kxk",
  })
  @get()
  static getKxk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kxk",
  })
  @post("{id}")
  static createKxk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
