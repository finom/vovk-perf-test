import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aqy")
export default class AqyController {
  @operation({
    summary: "Get Aqy",
  })
  @get()
  static getAqy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aqy",
  })
  @post("{id}")
  static createAqy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
