import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gnk")
export default class GnkController {
  @operation({
    summary: "Get Gnk",
  })
  @get()
  static getGnk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gnk",
  })
  @post("{id}")
  static createGnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
