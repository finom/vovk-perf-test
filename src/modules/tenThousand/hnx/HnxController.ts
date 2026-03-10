import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnx")
export default class HnxController {
  @operation({
    summary: "Get Hnx",
  })
  @get()
  static getHnx = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnx",
  })
  @post("{id}")
  static createHnx = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
