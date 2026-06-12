import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hau")
export default class HauController {
  @operation({
    summary: "Get Hau",
  })
  @get()
  static getHau = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hau",
  })
  @post("{id}")
  static createHau = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
