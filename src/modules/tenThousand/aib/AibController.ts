import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aib")
export default class AibController {
  @operation({
    summary: "Get Aib",
  })
  @get()
  static getAib = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aib",
  })
  @post("{id}")
  static createAib = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
