import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hfk")
export default class HfkController {
  @operation({
    summary: "Get Hfk",
  })
  @get()
  static getHfk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hfk",
  })
  @post("{id}")
  static createHfk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
