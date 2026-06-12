import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hxi")
export default class HxiController {
  @operation({
    summary: "Get Hxi",
  })
  @get()
  static getHxi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hxi",
  })
  @post("{id}")
  static createHxi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
