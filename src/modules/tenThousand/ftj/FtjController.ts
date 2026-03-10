import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("ftj")
export default class FtjController {
  @operation({
    summary: "Get Ftj",
  })
  @get()
  static getFtj = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Ftj",
  })
  @post("{id}")
  static createFtj = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
