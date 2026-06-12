import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asz")
export default class AszController {
  @operation({
    summary: "Get Asz",
  })
  @get()
  static getAsz = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Asz",
  })
  @post("{id}")
  static createAsz = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
