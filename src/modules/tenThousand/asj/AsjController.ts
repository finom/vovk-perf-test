import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asj")
export default class AsjController {
  @operation({
    summary: "Get Asj",
  })
  @get()
  static getAsj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Asj",
  })
  @post("{id}")
  static createAsj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
