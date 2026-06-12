import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("kjg")
export default class KjgController {
  @operation({
    summary: "Get Kjg",
  })
  @get()
  static getKjg = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Kjg",
  })
  @post("{id}")
  static createKjg = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
