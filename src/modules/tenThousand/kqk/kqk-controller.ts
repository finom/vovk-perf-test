import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kqk")
export default class KqkController {
  @operation({
    summary: "Get Kqk",
  })
  @get()
  static getKqk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kqk",
  })
  @post("{id}")
  static createKqk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
