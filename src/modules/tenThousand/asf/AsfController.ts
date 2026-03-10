import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("asf")
export default class AsfController {
  @operation({
    summary: "Get Asf",
  })
  @get()
  static getAsf = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Asf",
  })
  @post("{id}")
  static createAsf = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
