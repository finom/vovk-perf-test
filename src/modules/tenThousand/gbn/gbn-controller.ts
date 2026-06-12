import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("gbn")
export default class GbnController {
  @operation({
    summary: "Get Gbn",
  })
  @get()
  static getGbn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Gbn",
  })
  @post("{id}")
  static createGbn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
