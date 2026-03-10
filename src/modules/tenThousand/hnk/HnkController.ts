import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hnk")
export default class HnkController {
  @operation({
    summary: "Get Hnk",
  })
  @get()
  static getHnk = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hnk",
  })
  @post("{id}")
  static createHnk = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
