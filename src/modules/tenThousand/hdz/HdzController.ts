import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hdz")
export default class HdzController {
  @operation({
    summary: "Get Hdz",
  })
  @get()
  static getHdz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hdz",
  })
  @post("{id}")
  static createHdz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
