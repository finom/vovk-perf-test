import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjy")
export default class KjyController {
  @operation({
    summary: "Get Kjy",
  })
  @get()
  static getKjy = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjy",
  })
  @post("{id}")
  static createKjy = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
