import { procedure, prefix, get, post, operation } from "vovk";
import z from "zod";

@prefix("aws")
export default class AwsController {
  @operation({
    summary: "Get Aws",
  })
  @get()
  static getAws = procedure().handle(() => {
    return { get: true };
  });

  @operation({
    summary: "Create Aws",
  })
  @post("{id}")
  static createAws = procedure({
    disableServerSideValidation: ["params"],
    params: z.object({ id: z.string() }),
  }).handle((_req, { id }) => {
    return { post: true, id };
  });
}
