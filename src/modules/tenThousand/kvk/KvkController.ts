import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kvk")
export default class KvkController {
  @operation({
    summary: "Get Kvk",
  })
  @get()
  static getKvk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kvk",
  })
  @post("{id}")
  static createKvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
