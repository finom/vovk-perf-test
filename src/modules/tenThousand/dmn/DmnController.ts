import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("dmn")
export default class DmnController {
  @operation({
    summary: "Get Dmn",
  })
  @get()
  static getDmn = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Dmn",
  })
  @post("{id}")
  static createDmn = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
