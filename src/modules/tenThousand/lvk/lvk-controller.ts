import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("lvk")
export default class LvkController {
  @operation({
    summary: "Get Lvk",
  })
  @get()
  static getLvk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Lvk",
  })
  @post("{id}")
  static createLvk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
