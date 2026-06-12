import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("mhs")
export default class MhsController {
  @operation({
    summary: "Get Mhs",
  })
  @get()
  static getMhs = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Mhs",
  })
  @post("{id}")
  static createMhs = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
