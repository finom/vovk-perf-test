import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("itp")
export default class ItpController {
  @operation({
    summary: "Get Itp",
  })
  @get()
  static getItp = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Itp",
  })
  @post("{id}")
  static createItp = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
