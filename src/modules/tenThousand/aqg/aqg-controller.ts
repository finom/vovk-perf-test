import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqg")
export default class AqgController {
  @operation({
    summary: "Get Aqg",
  })
  @get()
  static getAqg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aqg",
  })
  @post("{id}")
  static createAqg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
