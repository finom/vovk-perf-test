import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("hgi")
export default class HgiController {
  @operation({
    summary: "Get Hgi",
  })
  @get()
  static getHgi = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Hgi",
  })
  @post("{id}")
  static createHgi = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
